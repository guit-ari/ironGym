package palestra.demopalestra.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import palestra.demopalestra.model.WorkoutLogs;
import palestra.demopalestra.services.WorkoutLogsService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/workoutLogs")
@CrossOrigin
public class WorkoutLogsController {
    @Autowired
    WorkoutLogsService workoutLogsService;

    
    @PostMapping("/create")
    public ResponseEntity<WorkoutLogs> createWorkoutLogs(@RequestBody WorkoutLogs newWorkoutLogs) {
        return new ResponseEntity<>(workoutLogsService.createWorkoutLogs(newWorkoutLogs), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<WorkoutLogs>> getAllWorkoutLogs() {
        List<WorkoutLogs> workoutLogs = workoutLogsService.getAllWorkoutLogs();
        return new ResponseEntity<List<WorkoutLogs>>(workoutLogs, HttpStatus.OK);
    }

    @GetMapping("/workoutLogs/{id}")
    public ResponseEntity<WorkoutLogs> getWorkoutLogsById(@PathVariable Long id) {
        return new ResponseEntity<>(workoutLogsService.getWorkoutLogsById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteWorkoutLogsById(@PathVariable Long id) {
        workoutLogsService.deleteWorkoutLogsById(id);
        return new ResponseEntity<>("Scheda workout cancellata con successo", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<WorkoutLogs> updateWorkoutLogs(@PathVariable Long id,
            @RequestBody WorkoutLogs newWorkoutLogs) {
        return new ResponseEntity<WorkoutLogs>(workoutLogsService.updateWorkoutLogs(id, newWorkoutLogs), HttpStatus.OK);
    }



}
