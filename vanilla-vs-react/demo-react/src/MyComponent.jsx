function MyComponent(props) {
    return (
        <h6 className="p-2 rounded lg:bg-orange-100 md:bg-red-100 sm:bg-orange-100">
            Hello {props.name} .This is my component
        </h6>
    );
}

export default MyComponent;