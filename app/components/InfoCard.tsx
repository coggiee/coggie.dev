interface Items {
  title: string;
  description?: string[] | null;
}

export const InfoCard = ({
  title,
  isDesc,
  items,
}: {
  title: string;
  isDesc: boolean;
  items: Items[];
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-3xl font-bold decoration-[#f7ab0a]/50 underline underline-offset-8'>
        {title}
      </h1>
      <div className='flex flex-col'>
        {isDesc &&
          items.map(
            (item) =>
              item.description && (
                <div key={item.title}>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <div>
                    {item.description && (
                      <ul>
                        {item.description.map((desc) => (
                          <li key={desc}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
          )}
        {!isDesc && (
          <ul>
            {items.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
