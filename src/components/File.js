const File = ({ name }) => {
    
    const fileExtension = name.split('.')[1];
    const fileIcons = {
        jpg: 'file image icon',
        mp4: 'headphones icon'
    }

    return <div style={{ padding: "8px" }}>
        <i className={`${fileIcons[fileExtension]}`}></i>
        {name}
    </div>
};

export
    default File;