package palestra.demopalestra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import palestra.demopalestra.model.Workout;
import palestra.demopalestra.services.WorkoutService;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/workout")
@CrossOrigin

public class WorkoutController {
    @Autowired
    WorkoutService workoutService;

    @PostMapping("/create")
    public ResponseEntity<Workout> createWorkout(@RequestBody Workout newWorkout) {
        return new ResponseEntity<>(workoutService.createWorkout(newWorkout), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Workout>> getAllWorkouts() {
        List<Workout> workout = workoutService.getAllWorkouts();
        return new ResponseEntity<List<Workout>>(workout, HttpStatus.OK);
    }

    @GetMapping("/workout/{id}")
    public ResponseEntity<Workout> getWorkoutById(@PathVariable Long id) {
        return new ResponseEntity<>(workoutService.getWorkoutById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteWorkoutById(@PathVariable Long id) {
        workoutService.deleteWorkoutById(id);
        return new ResponseEntity<>("Workout cancellato con successo", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Workout> updateWorkout(@PathVariable Long id, @RequestBody Workout newWorkout) {
        return new ResponseEntity<Workout>(workoutService.updateWorkout(id, newWorkout), HttpStatus.OK);
    }
  
    @GetMapping("/category/{categoryId}")
public ResponseEntity<List<Workout>> getWorkoutsByCategory(@PathVariable Long categoryId) {
    List<Workout> workouts = workoutService.findByCategoryId(categoryId);
    return ResponseEntity.ok(workouts);
}
}
