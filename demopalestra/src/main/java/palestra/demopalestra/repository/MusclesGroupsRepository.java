package palestra.demopalestra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import palestra.demopalestra.model.MusclesGroups;

public interface MusclesGroupsRepository extends JpaRepository<MusclesGroups,Long>{
    
}
