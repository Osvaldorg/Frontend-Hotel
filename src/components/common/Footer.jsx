const FooterComponent = () => {
  return (
    <footer>
      <span className="my-footer">
        Phegon Hotel | Todos los Derechos Reservados &copy;{" "}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default FooterComponent;
