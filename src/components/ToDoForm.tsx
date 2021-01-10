import React, {useState, useRef} from "react";

interface ToDoFormProps {
    onAdd(title : string) : void
}

const ToDoForm : React.FC<ToDoFormProps> = (props) => {

    // const [title, setTitle] = useState<string>('');
    //
    // const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // };

    const ref = useRef<HTMLInputElement>(null)

    const handlePress = (event : React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
            // console.log(title);
            // setTitle('');
        }
    };

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                // value={title}
                type='text'
                id='title'
                placeholder='Enter name of task'
                // onChange={handleChange}
                onKeyPress={handlePress}
            />
            <label htmlFor='title' className='active'>
                Enter name of task
            </label>
        </div>
    );
};

export default ToDoForm;