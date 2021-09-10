import CartListWithSettingsAndPagination from "../components/containers/CardList/CartListWithSettingsAndPagination";
import CardListSkeleton from "../components/ui/Skeletons/CardListSkeleton";
import usePage from "../hooks/pagination";

const Index = () => {
  const [data, createOnPageinationChangeHandler] = usePage(`/products?page=1`);
  const renderPageOrSkeleton = data ? (
    <CartListWithSettingsAndPagination
      products={data.docs}
      totalResult={data.totalDocs}
      totalPages={data.totalPages}
      onPaginationChange={createOnPageinationChangeHandler("/page")}
      baseSortUrl="/sort/all"
    />
  ) : (
    <CardListSkeleton />
  );
  return renderPageOrSkeleton;
};

// export async function getServerSideProps() {
//   const { data } = await Axios().get("products?page=1");
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Index;
