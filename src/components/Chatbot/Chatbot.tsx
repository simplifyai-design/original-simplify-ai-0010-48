useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        // Check if the chat is open and if the click was outside the chat window
        if (isOpen && chatWindowRef.current && !chatWindowdRef.current.contains(event.target as Node)) {
            if (status === 'connected') stop(); // Stop voice session if clicking out
            setIsOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen, status, stop]);
