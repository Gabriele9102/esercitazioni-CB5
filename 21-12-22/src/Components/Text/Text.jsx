
import "./text.css"

const mapVariant ={
    body: `text-md`,
    title: `text-xl mb-sm`
}

export const Text = (props) =>{

    const {as,
         children,
          variant = 'body'
        } = props;

    return <div className={ `Text ${mapVariant[variant]}` }>{children}</div>
}