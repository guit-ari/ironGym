package palestra.demopalestra.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import palestra.demopalestra.model.Workout;
import palestra.demopalestra.model.WorkoutLogDetails;
import palestra.demopalestra.model.WorkoutLogs;
import palestra.demopalestra.repository.WorkoutLogDetailsRepository;
import palestra.demopalestra.repository.WorkoutLogsRepository;
import palestra.demopalestra.repository.WorkoutRepository;

@Service
public class WorkoutLogDetailsService {
    @Autowired
    WorkoutLogDetailsRepository workoutLogDetailsRepository;
    @Autowired
    WorkoutLogsRepository workoutLogsRepository;
    @Autowired
    WorkoutRepository workoutRepository;

    public WorkoutLogDetails createWorkoutLogDetails(WorkoutLogDetails w) {
        return workoutLogDetailsRepository.save(w);
    }

    public List<WorkoutLogDetails> getAllWorkoutLogDetails() {
        return workoutLogDetailsRepository.findAll();
    }

    public void deleteWorkoutLogDetailsById(Long id) {
        workoutLogDetailsRepository.deleteById(id);
    }

    public WorkoutLogDetails getWorkoutLogDetailsById(Long id) {

        Optional<WorkoutLogDetails> workoutLogDetailsOpt = workoutLogDetailsRepository.findById(id);
        return workoutLogDetailsOpt.get();
    }

    public WorkoutLogDetails updateWorkoutLogDetails(Long id, WorkoutLogDetails newWorkoutLogDetails) {
        WorkoutLogDetails oldWorkoutLogDetails = getWorkoutLogDetailsById(id);
        if (oldWorkoutLogDetails != null) {

            oldWorkoutLogDetails.setNote(newWorkoutLogDetails.getNote());
            oldWorkoutLogDetails.setPeso(newWorkoutLogDetails.getPeso());
            oldWorkoutLogDetails.setRecover(newWorkoutLogDetails.getRecover());
            oldWorkoutLogDetails.setRipetizioni(newWorkoutLogDetails.getRipetizioni());
            oldWorkoutLogDetails.setSets(newWorkoutLogDetails.getSets());
            oldWorkoutLogDetails.setTempo(newWorkoutLogDetails.getTempo());
            oldWorkoutLogDetails.setWorkoutLog(newWorkoutLogDetails.getWorkoutLog());
            oldWorkoutLogDetails.setWorkouts(newWorkoutLogDetails.getWorkouts());

            return workoutLogDetailsRepository.save(oldWorkoutLogDetails);

        } else
            return null;
    }

    public WorkoutLogDetails updateLog(Long id, WorkoutLogDetails newWorkoutLogDetails) {
        WorkoutLogDetails oldWorkoutLogDetails = getWorkoutLogDetailsById(id);
        if (oldWorkoutLogDetails != null) {

            oldWorkoutLogDetails.setNote(newWorkoutLogDetails.getNote());
            oldWorkoutLogDetails.setPeso(newWorkoutLogDetails.getPeso());
            oldWorkoutLogDetails.setRecover(newWorkoutLogDetails.getRecover());
            oldWorkoutLogDetails.setRipetizioni(newWorkoutLogDetails.getRipetizioni());
            oldWorkoutLogDetails.setSets(newWorkoutLogDetails.getSets());
            oldWorkoutLogDetails.setTempo(newWorkoutLogDetails.getTempo());
            oldWorkoutLogDetails.setWorkoutLog(newWorkoutLogDetails.getWorkoutLog());
            oldWorkoutLogDetails.setWorkouts(newWorkoutLogDetails.getWorkouts());

            return workoutLogDetailsRepository.save(oldWorkoutLogDetails);

        } else
            return null;
    }
    public List<WorkoutLogDetails> getDetailsByLogId(Long logId) {
        return workoutLogDetailsRepository.findByWorkoutLogId(logId);
    }

    public List<WorkoutLogDetails> getWorkoutLogDetailsByWorkoutLogId(Long workoutLogId) {
        return workoutLogDetailsRepository.findByWorkoutLogId(workoutLogId);
    }


  //aggiunge workout alla scheda
//public void addWorkoutToLog(Long workoutId, Long workoutLogId) {
  //  workoutLogDetailsRepository.addWorkoutToLog(workoutId, workoutLogId);
//}

public void addWorkoutToLog(Long workoutId, Long workoutLogId){
    

        // recupero il workout dal suo id
        Optional<Workout> workoutOptional = workoutRepository.findById(workoutId);
        
        // recupero il workout log dal suo id
        Optional<WorkoutLogs> workoutLogOptional = workoutLogsRepository.findById(workoutLogId);
        
        // verifico che entrambi gli oggetti esistano
        if (workoutOptional.isPresent() && workoutLogOptional.isPresent()) {
            Workout workout = workoutOptional.get();
            WorkoutLogs workoutLog = workoutLogOptional.get();
            
            // creo un nuovo oggetto WorkoutLogDetails per associare il workout al log
            WorkoutLogDetails workoutLogDetails = new WorkoutLogDetails();
            workoutLogDetails.setWorkouts(workout);
            workoutLogDetails.setWorkoutLog(workoutLog);
            
            // salvo l'oggetto WorkoutLogDetails
            workoutLogDetailsRepository.save(workoutLogDetails);
        }
        else {
            // gestione dell'errore nel caso in cui uno dei due oggetti non esiste
            throw new IllegalArgumentException("Workout or WorkoutLog not found");
        }
    }
        

}
