function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const income = budget[`income-${getCurrentYear()}`];
  const gdp = budget[`gdp-${getCurrentYear()}`];
  const capita = budget[`capita-${getCurrentYear()}`];

  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}