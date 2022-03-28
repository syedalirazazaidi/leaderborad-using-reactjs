import _ from "lodash";
function Paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // return items.slice(startIndex, startIndex + pageSize), "lllll--llll";
  // return setlePlayeer.map
  return _(items).slice(startIndex).take(pageSize).value();
}

export default Paginate;
