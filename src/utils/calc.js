export function calculateCGPA(courses, gradeMap) {
  let totalCredits = 0;
  let totalGradePoints = 0;

  for (const c of courses) {
    const credit = Number(c.credit);
    const gp = gradeMap[c.grade];
    totalCredits += credit;
    totalGradePoints += credit * gp;
  }

  const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0;

  return {
    totalCredits,
    totalGradePoints: Math.round(totalGradePoints * 100) / 100,
    cgpa: Math.round(cgpa * 100) / 100,
  };
}
