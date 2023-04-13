const ShortcutKeyboard = ({combo, comp, description}) => {
  return (
    <div className="container">
      <div className="comp-name">{comp}</div>
      <div className="button">command: {combo}</div>
      <div className="desc">{description}</div>
    </div>
  )
}

export default ShortcutKeyboard;