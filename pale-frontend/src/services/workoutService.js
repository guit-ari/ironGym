const BASE_URL_SCHEDE = "/api/workoutLogs";
const BASE_URL_WORKOUT = "/api/workout";
const BASE_URL = "/api/workoutLogDetails";


const WorkoutService = {
  // Schede
  getAllSchede: async () => {
    try {
      const resp = await fetch(`${BASE_URL_SCHEDE}/getAll`);
      if (!resp.ok) throw new Error("Errore nel recupero delle schede");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  getByIdScheda: async (id) => {
    try {
      const resp = await fetch(`${BASE_URL_SCHEDE}/${id}`);
      if (!resp.ok) throw new Error("Errore nel recupero della scheda");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  createScheda: async (scheda) => {
    try {
      const resp = await fetch(`${BASE_URL_SCHEDE}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scheda),
      });
      if (!resp.ok) throw new Error("Errore durante la creazione della scheda");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  deleteScheda: async (id) => {
    try {
      const resp = await fetch(`${BASE_URL_SCHEDE}/delete/${id}`, { method: "DELETE" });
      if (!resp.ok) throw new Error("Errore durante l'eliminazione");
      const result = await resp.json(); 
      return result.message;
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  // Workouts
  getAllWorkouts: async () => {
    try {
      const resp = await fetch(`${BASE_URL_WORKOUT}/getAll`);
      if (!resp.ok) throw new Error("Errore nel recupero dei workout");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  addWorkoutToScheda: async (logId, workoutId) => {
    try {
      const resp = await fetch(
        `/api/workoutLogDetails/${logId}/workouts/${workoutId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!resp.ok) throw new Error("Errore nell'aggiunta del workout");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  },
  //dettaglio
  getDettagliScheda: async (workoutLogId) => {
    try {
      const resp = await fetch(`${BASE_URL}/workout-logs/${workoutLogId}/details`);
      if (!resp.ok) throw new Error("Errore nel recupero dei dettagli");
      return await resp.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  },

  deleteWorkout: async (workoutLogDetailId) => {
    try {
      const resp = await fetch(`${BASE_URL}/delete/${workoutLogDetailId}`, {
        method: "DELETE",
      });
      if (!resp.ok) throw new Error("Errore durante l'eliminazione");
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  },
};

export default WorkoutService;
