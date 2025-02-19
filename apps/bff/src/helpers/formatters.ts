export function formatSalary(salary: number) {
  const currencyFormat = new Intl.NumberFormat("en-US", {style: "currency", currency: 'USD'});

  return currencyFormat.format(salary);
}
