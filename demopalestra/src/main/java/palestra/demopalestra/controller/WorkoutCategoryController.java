package palestra.demopalestra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import palestra.demopalestra.model.WorkoutCategory;
import palestra.demopalestra.services.WorkoutCategoryService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/workoutCategory")
@CrossOrigin
public class WorkoutCategoryController {
    @Autowired
    WorkoutCategoryService workoutCategoryService;

    @PostMapping("/create")
    public ResponseEntity<WorkoutCategory> createWorkoutCategory(@RequestBody WorkoutCategory newWorkoutCategory) {
        return new ResponseEntity<>(workoutCategoryService.createWorkoutCategory(newWorkoutCategory), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<WorkoutCategory>> getAllWorkoutCategory() {
        List<WorkoutCategory> workoutCategory = workoutCategoryService.getAllWorkoutCategories();
        return new ResponseEntity<List<WorkoutCategory>>(workoutCategory, HttpStatus.OK);
    }

    @GetMapping("/workoutCategory/{id}")
    public ResponseEntity<WorkoutCategory> getWorkoutCategoryById(@PathVariable Long id) {
        return new ResponseEntity<>(workoutCategoryService.getWorkoutCategoryById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteWorkoutCategoryById(@PathVariable Long id) {
        workoutCategoryService.deleteWorkoutCategoryById(id);
        return new ResponseEntity<>("Categoria workout cancellata con successo", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutCategory> updateWorkoutCategory(@PathVariable Long id,
            @RequestBody WorkoutCategory newWorkoutCategory) {
        return new ResponseEntity<WorkoutCategory>(workoutCategoryService.updateWorkoutCategory(id, newWorkoutCategory),
                HttpStatus.OK);
    }
}
