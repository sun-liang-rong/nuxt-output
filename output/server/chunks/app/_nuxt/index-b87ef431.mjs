import { q as queryContent } from './query-bf1c20aa.mjs';
import { parseISO, format } from 'date-fns';

function formattedDate(date) {
  if (!date)
    return "";
  const dateObject = parseISO(date);
  const formattedResult = format(dateObject, "MMM dd, yyyy");
  return formattedResult;
}
function insertYearToPosts(posts) {
  let currentYear = -1;
  return posts.reduce(
    (posts2, post) => {
      const year = new Date(post.date).getFullYear();
      if (year !== currentYear && !isNaN(year)) {
        posts2.push({
          isMarked: true,
          year
        });
        currentYear = year;
      }
      posts2.push(post);
      return posts2;
    },
    []
  );
}
async function getIncludedYearPosts(dirName) {
  const result = await queryContent(dirName).sort({ date: -1 }).find();
  return insertYearToPosts(result);
}

export { formattedDate as f, getIncludedYearPosts as g };
//# sourceMappingURL=index-b87ef431.mjs.map
