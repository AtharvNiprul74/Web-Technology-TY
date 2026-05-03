function AnnouncementList({ announcements }) {
    return (
        <div className="card p-3">
            <h5>📢 Announcements</h5>
            {announcements.map((a, i) => (
                <div key={i} className="alert alert-info p-2">
                    {a}
                </div>
            ))}
        </div>
    );
}

export default AnnouncementList;