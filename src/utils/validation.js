export function validateCourse(course, gradeMap) {
  const errors = [];

  if (!course.name.trim()) errors.push("Course name required.");

  if (course.credit === "" || course.credit == null) {
    errors.push("Credit hours required.");
  } else {
    const credit = Number(course.credit);
    if (!Number.isFinite(credit) || credit <= 0) {
      errors.push("Credit hours must be a positive number.");
    }
  }

  if (!course.grade || !(course.grade in gradeMap)) {
    errors.push("Invalid grade selected.");
  }

  return errors;
}
