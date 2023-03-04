package palestra.demopalestra.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import palestra.demopalestra.model.Workout;


import palestra.demopalestra.repository.WorkoutRepository;

@Service
public class WorkoutService {
    @Autowired
    WorkoutRepository workoutRepository;


    public Workout createWorkout(Workout w) {
        return workoutRepository.save(w);
    }

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public void deleteWorkoutById(Long id) {
        workoutRepository.deleteById(id);
    }

    public Workout getWorkoutById(Long id) {

        Optional<Workout> workoutOpt = workoutRepository.findById(id);
        if (workoutOpt.isPresent())
            return workoutOpt.get();

        return null;
    }

    public Workout updateWorkout(Long id, Workout newWorkout) {
        Workout oldWorkout = getWorkoutById(id);
        if (oldWorkout != null) {

            oldWorkout.setNome(newWorkout.getNome());
            oldWorkout.setCategorie(newWorkout.getCategorie());
            oldWorkout.setGruppoMuscolare(newWorkout.getGruppoMuscolare());
            oldWorkout.setDifficoltà(newWorkout.getDifficoltà());

            return workoutRepository.save(oldWorkout);

        } else
            return null;
    }

  public List<Workout> findByCategoryId(Long categoryId) {
        return workoutRepository.findByCategoryId(categoryId);
    }


}
