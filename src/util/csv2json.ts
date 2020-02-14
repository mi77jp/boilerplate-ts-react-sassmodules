export const csv2json = (str: any) => {
  const delimiter: any = ",";
  return str.split("\n").reduce((table: any, row: any) => {
    if (!table) return;
    table.push(
      row.split(delimiter).map( (d: any) => {
        return d.trim();
      })
    );
    return table;
  }, []);
}
