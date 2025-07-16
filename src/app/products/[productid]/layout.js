export async function generateMetadata({ params }) {
  const id = await params.productId;

  return { title: `product id: ${id}` };
}

export default function productById({ children }) {
  return <div>product by it {children}</div>;
}
