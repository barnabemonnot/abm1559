class Header extends React.Component {
  render() {
    const e = React.createElement;

    return (
      e(
        'div', {	className: 'header' },
        e(
          "div", { className: "header-container" },
          e(
            'div', { className: "header-left-element" },
            e('a', { href: '/' }, "Robust Incentives Group")
          ),
          e(
            'div', { className: "header-right-elements" },
            // e(
            //   'div', { className: "header-right-element" },
            //   e('a', { href: '/about' }, 'About')
            // ),
            // e(
            //   'div', { className: "header-right-element" },
            //   e('a', { href: 'https://twitter.com/hackingresearch' }, 'Twitter')
            // )
          )
        )
      )
    );
  }
}