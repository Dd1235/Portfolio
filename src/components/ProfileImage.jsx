export const ProfileImage = () => {
    return (
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-primary mx-auto mb-6 animate-fade-in">
            <img
                src="/profile2.jpeg"
                alt="Dedeepya Avancha"
                className="w-full h-full object-cover"
            />
        </div>
    );
};
