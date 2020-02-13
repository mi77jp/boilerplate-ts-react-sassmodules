export const csv2json = (str: String) => {
  const delimiter = ",";
  return str.split("\n").reduce((table, row) => {
    if (!table) return;
    table.push(
      row.split(delimiter).map(d => {
        return d.trim();
      })
    );
    return table;
  }, []);
}
