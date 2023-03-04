package palestra.demopalestra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import palestra.demopalestra.model.WorkoutCategory;

public interface WorkoutCategoryRepository extends JpaRepository<WorkoutCategory,Long>{
    
}
