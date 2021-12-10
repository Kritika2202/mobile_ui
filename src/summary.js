import { useNestedAttribute } from 'threekit/hooks';

const summary = () => {
  const [attribute, setAttribute] = useNestedAttribute('Case');

  const selected = attribute.value;

  return (
    <div>
      <div>{attribute.name}</div>
      <div>
        {attribute.values.map((option, i) => (
          <div key={i} onClick={setAttribute(option.assetId)}>
            {option.label}</div>
        ))}
      </div>
    </div>
  );
};