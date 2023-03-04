package palestra.demopalestra.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import palestra.demopalestra.model.MusclesGroups;
import palestra.demopalestra.repository.MusclesGroupsRepository;

@Service
public class MusclesGroupsService {
    @Autowired
    MusclesGroupsRepository musclesGroupsRepository;

    public MusclesGroups createMusclesGroups(MusclesGroups m) {
        return musclesGroupsRepository.save(m);
    }

    public List<MusclesGroups> getAllMusclesGroups() {
        return musclesGroupsRepository.findAll();
    }

    public void deleteMusclesGroupsById(Long id) {
        musclesGroupsRepository.deleteById(id);
    }

    public MusclesGroups getMusclesGroupsById(Long id) {

        Optional<MusclesGroups> musclesGroupsOpt = musclesGroupsRepository.findById(id);
        return musclesGroupsOpt.get();
    }

    public MusclesGroups updateMusclesGroups(Long id, MusclesGroups newMusclesGroups) {
        MusclesGroups oldMusclesGroups = getMusclesGroupsById(id);
        if (oldMusclesGroups != null) {

            oldMusclesGroups.setGruppoMuscolare(newMusclesGroups.getGruppoMuscolare());

            return musclesGroupsRepository.save(oldMusclesGroups);

        } else
            return null;
    }
}
