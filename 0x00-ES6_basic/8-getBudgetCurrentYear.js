function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const income1 = `income-${getCurrentYear()}`;
  const budget1 = `gdp-${getCurrentYear()}`;
  const capita1 = `capita-${getCurrentYear()}`;
  const budget = {};

  budget[income1] = income;
  budget[budget1] = gdp;
  budget[capita1] = capita;

  return budget;
}
