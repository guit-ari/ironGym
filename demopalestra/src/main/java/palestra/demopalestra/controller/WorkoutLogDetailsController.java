package palestra.demopalestra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import palestra.demopalestra.model.WorkoutLogDetails;

import palestra.demopalestra.services.WorkoutLogDetailsService;
import palestra.demopalestra.services.WorkoutLogsService;
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
@RequestMapping("api/workoutLogDetails")
@CrossOrigin
public class WorkoutLogDetailsController {
    @Autowired
    WorkoutLogDetailsService workoutLogDetailsService;
    @Autowired
    WorkoutService workoutService;
    @Autowired
    WorkoutLogsService workoutLogsService;

    @PostMapping("/create")
    public ResponseEntity<WorkoutLogDetails> createWorkoutLogDetails(
            @RequestBody WorkoutLogDetails newWorkoutLogDetails) {
        return new ResponseEntity<>(workoutLogDetailsService.createWorkoutLogDetails(newWorkoutLogDetails),
                HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<WorkoutLogDetails>> getAllWorkoutLogDetails() {
        List<WorkoutLogDetails> workoutLogDetails = workoutLogDetailsService.getAllWorkoutLogDetails();
        return new ResponseEntity<List<WorkoutLogDetails>>(workoutLogDetails, HttpStatus.OK);
    }

    @GetMapping("/workoutLogDetails/{id}")
    public ResponseEntity<WorkoutLogDetails> getWorkoutLogDetailsById(@PathVariable Long id) {
        return new ResponseEntity<>(workoutLogDetailsService.getWorkoutLogDetailsById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteWorkoutLogDetailsById(@PathVariable Long id) {
        workoutLogDetailsService.deleteWorkoutLogDetailsById(id);
        return new ResponseEntity<>("WorkoutLogDetails cancellato con successo", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutLogDetails> updateWorkoutLogDetails(@PathVariable Long id,
            @RequestBody WorkoutLogDetails newWorkoutLogDetails) {
        return new ResponseEntity<WorkoutLogDetails>(
                workoutLogDetailsService.updateWorkoutLogDetails(id, newWorkoutLogDetails), HttpStatus.OK);
    }
    @GetMapping("/workout-logs/{logId}/details")
    public List<WorkoutLogDetails> getDetailsByLogId(@PathVariable Long logId) {
        return workoutLogDetailsService.getDetailsByLogId(logId);
    }
//aggiunge workout alla scheda
    @PostMapping("/{workoutLogId}/workouts/{workoutId}")

    public void addWorkoutToLog(@PathVariable Long workoutLogId, @PathVariable Long workoutId) {
        workoutLogDetailsService.addWorkoutToLog(workoutId, workoutLogId);
    }
    

}

   