package com.tranphuongnam.portfolio.service;

import com.tranphuongnam.portfolio.entity.Skill;
import com.tranphuongnam.portfolio.repository.SkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {
    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public List<Skill> findAll() {
        return skillRepository.findAll();
    }

    public Skill findById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found: " + id));
    }

    public Skill create(Skill skill) {
        skill.setId(null);
        return skillRepository.save(skill);
    }

    public Skill update(Long id, Skill skillDetails) {
        Skill skill = findById(id);
        skill.setName(skillDetails.getName());
        skill.setCategory(skillDetails.getCategory());
        skill.setProficiency(skillDetails.getProficiency());
        return skillRepository.save(skill);
    }

    public void delete(Long id) {
        Skill skill = findById(id);
        skillRepository.delete(skill);
    }
}
