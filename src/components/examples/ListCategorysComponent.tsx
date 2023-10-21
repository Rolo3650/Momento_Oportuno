import { useAllCategories } from '../../hooks';

export const ListCategoriesComponent = () => {
  const { data: categories, isLoading: loadingCategories } = useAllCategories();

  if (loadingCategories) return <p>Loading...</p>;
  if (!categories) return <p>Categories not found</p>;

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories.data.map((category) => (
          <li key={category.id}>
            {category.name} - {category.slug}
            {category.children.length > 0 && (
              <ul>
                {category.children.map((child) => (
                  <li key={child.id}>
                    {child.name} - {child.slug}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
