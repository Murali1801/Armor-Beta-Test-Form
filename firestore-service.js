import { db } from "./config.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Saves a form submission object to Firestore.
 * @param {Object} data - The form answers object.
 */
export async function saveFormSubmission(data) {
    try {
        const docRef = await addDoc(collection(db, "submissions"), {
            ...data,
            submittedAt: serverTimestamp()
        });
        console.log("Submission successful! Document ID:", docRef.id);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error("Error adding document: ", error);
        return { success: false, error };
    }
}
