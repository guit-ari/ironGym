package palestra.demopalestra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import palestra.demopalestra.model.MusclesGroups;
import palestra.demopalestra.services.MusclesGroupsService;

@RestController
@RequestMapping("api/musclesGroups")
@CrossOrigin
public class MusclesGroupsController {
    @Autowired
    MusclesGroupsService musclesGroupsService;

    @PostMapping("/create")
    public ResponseEntity<MusclesGroups> createMusclesGroups(@RequestBody MusclesGroups newMusclesGroups) {
        return new ResponseEntity<>(musclesGroupsService.createMusclesGroups(newMusclesGroups), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<MusclesGroups>> getAllMusclesGroups() {
        List<MusclesGroups> musclesGroups = musclesGroupsService.getAllMusclesGroups();
        return new ResponseEntity<List<MusclesGroups>>(musclesGroups, HttpStatus.OK);
    }

    @GetMapping("/musclesGroups/{id}")
    public ResponseEntity<MusclesGroups> getMusclesGroupsById(@PathVariable Long id) {
        return new ResponseEntity<>(musclesGroupsService.getMusclesGroupsById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMusclesGroupsById(@PathVariable Long id) {
        musclesGroupsService.deleteMusclesGroupsById(id);
        return new ResponseEntity<>("Gruppo muscolare cancellato con successo", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<MusclesGroups> updateMusclesGroups(@PathVariable Long id,
            @RequestBody MusclesGroups newMusclesGroups) {
        return new ResponseEntity<MusclesGroups>(musclesGroupsService.updateMusclesGroups(id, newMusclesGroups),
                HttpStatus.OK);
    }
}
