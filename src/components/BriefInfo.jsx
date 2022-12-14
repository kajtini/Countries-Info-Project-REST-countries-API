function BriefInfo({ population, region, capital }) {
  return (
    <>
      <li className="flex gap-2">
        <p className="font-semibold mb-1">Population: </p>
        <span>{population}</span>
      </li>
      <li className="flex gap-2">
        <p className="font-semibold mb-1">Region: </p>
        <span>{region}</span>
      </li>
      <li className="flex gap-2">
        <p className="font-semibold">Capital: </p>
        <span>{capital[0]}</span>
      </li>
    </>
  );
}

export default BriefInfo;
