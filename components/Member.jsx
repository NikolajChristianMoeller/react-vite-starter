export default function Member({ member }) {
    return (
        <article>
            <p>
                {member.firstName} {member.lastName}
            </p>
            <a href={`mailto:${member.email}`}>{member.email}</a>
        </article>
    );
}