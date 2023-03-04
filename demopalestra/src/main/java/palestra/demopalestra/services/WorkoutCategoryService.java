package palestra.demopalestra.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import palestra.demopalestra.model.WorkoutCategory;
import palestra.demopalestra.repository.WorkoutCategoryRepository;

@Service
public class WorkoutCategoryService {
    @Autowired
    WorkoutCategoryRepository workoutCategoryRepository;

    public WorkoutCategory createWorkoutCategory(WorkoutCategory w) {
        return workoutCategoryRepository.save(w);
    }

    public List<WorkoutCategory> getAllWorkoutCategories() {
        return workoutCategoryRepository.findAll();
    }

    public void deleteWorkoutCategoryById(Long id) {
        workoutCategoryRepository.deleteById(id);
    }

    public WorkoutCategory getWorkoutCategoryById(Long id) {

        Optional<WorkoutCategory> workoutCategoryOpt = workoutCategoryRepository.findById(id);
        return workoutCategoryOpt.get();
    }

    public WorkoutCategory updateWorkoutCategory(Long id, WorkoutCategory newWorkoutCategory) {
        WorkoutCategory oldWorkoutCategory = getWorkoutCategoryById(id);
        if (oldWorkoutCategory != null) {

            oldWorkoutCategory.setDescrizione(newWorkoutCategory.getDescrizione());

            return workoutCategoryRepository.save(oldWorkoutCategory);

        } else
            return null;
    }
}
