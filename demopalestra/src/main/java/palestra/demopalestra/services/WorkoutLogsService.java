package palestra.demopalestra.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;



import palestra.demopalestra.model.WorkoutLogs;
import palestra.demopalestra.repository.WorkoutLogsRepository;


@Service
public class WorkoutLogsService {
    @Autowired
    WorkoutLogsRepository workoutLogsRepository;
  

    public WorkoutLogs createWorkoutLogs(WorkoutLogs w) {
        return workoutLogsRepository.save(w);
    }

    public List<WorkoutLogs> getAllWorkoutLogs() {
        return workoutLogsRepository.findAll();
    }

    public void deleteWorkoutLogsById(Long id) {
        workoutLogsRepository.deleteById(id);
    }

    public WorkoutLogs getWorkoutLogsById(Long id) {

        Optional<WorkoutLogs> workoutLogsOpt = workoutLogsRepository.findById(id);
        return workoutLogsOpt.get();
    }

    public WorkoutLogs updateWorkoutLogs(Long id, WorkoutLogs newWorkoutLogs) {
        WorkoutLogs oldWorkoutLogs = getWorkoutLogsById(id);
        if (oldWorkoutLogs != null) {

            oldWorkoutLogs.setNome(newWorkoutLogs.getNome());
            oldWorkoutLogs.setDescrizione(newWorkoutLogs.getDescrizione());
            return workoutLogsRepository.save(oldWorkoutLogs);

        } else
            return null;
    }

   

 
}
