const File = (props) => {

    const fileExtension = props.name.split('.')[1];
    const fileIcons = {
        jpg: 'file image icon',
        mp4: 'headphones icon'
    }

    return <div style={{ padding: "8px" }}>
        <i className={`${fileIcons[fileExtension]}`}></i>
        {props.name}
    </div>
};

export
    default File;