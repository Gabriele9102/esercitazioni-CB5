import "./text.css"

const mapVariant ={
    body: `text-md`,
    title: `text-xl mb-sm x-large`
}

export const Text = (props) =>{

    const {as = ' ',
         children = ' ',
          variant = 'body',
          ...att
        } = props;

    return <div className={ `Text ${mapVariant[variant]}` } {...att}>{children}</div>
}