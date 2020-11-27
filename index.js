const education = document.getElementById("education");
const experience = document.getElementById("experience");
const skills1 = document.getElementById("skills-1");
const skills2 = document.getElementById("skills-2");

education.style.display = "none";
experience.style.display = "none";
skills1.style.display = "none";
skills2.style.display = "none";

function toggleEducationVisibility() {
  const element = document.getElementById("education");
  experience.style.display = "none";
  skills1.style.display = "none";
  skills2.style.display = "none";

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleExperienceVisibility() {
  const element = document.getElementById("experience");
  skills1.style.display = "none";
  skills2.style.display = "none";
  education.style.display = "none";

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function toggleSkillsVisibility() {
  const skills1 = document.getElementById("skills-1");
  const skills2 = document.getElementById("skills-2");

  experience.style.display = "none";
  education.style.display = "none";

  if (skills1.style.display === "block") {
    skills1.style.display = "none";
  } else {
    skills1.style.display = "block";
  }

  if (skills2.style.display === "block") {
    skills2.style.display = "none";
  } else {
    skills2.style.display = "block";
  }
}
