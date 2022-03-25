const DefaultInput = ({ name, onChange, value }) => {
  console.log('aaa');

  return (
    <div>
      <input name={name} onChange={onChange} value={value} />
    </div>
  );
};

export default DefaultInput;
