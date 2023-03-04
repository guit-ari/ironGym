package palestra.demopalestra.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MusclesGroups {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long muscleGroupId;
    private String gruppoMuscolare;

    public MusclesGroups(String gruppoMuscolare) {
        this.gruppoMuscolare = gruppoMuscolare;
    }

}
