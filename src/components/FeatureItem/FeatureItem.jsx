import './FeatureItem.css'

function FeatureItem({children}) {
    return(
        <div className='feature-item'>
            {children}
        </div>
    )
}

export default FeatureItem