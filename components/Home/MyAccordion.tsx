'use client';
import { Accordion } from '@mantine/core';
import classes from './module.css/Demo.module.css';
import { IconPlus } from '@tabler/icons-react';

const data = [
    {
        value: "What is Netflix?",
        description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        value: "How much does Netflix cost?",
        description: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts."
    },
    {
        value: "Where can I watch?",
        description: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        value: "How do I cancel?",
        description: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        value: "What can I watch on Netflix?",
        description: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        value: "Is Netflix good for kids?",
        description: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

const Demo = () => {

    const items = data.map((v) => (
        <Accordion.Item key={v.value} value={v.value}>
            <Accordion.Control>{v.value}</Accordion.Control>
            <Accordion.Panel>{v.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion
            radius="xs"
            color='white'
            className='my-12'
            classNames={{ chevron: classes.chevron }}
            variant="separated"
            chevron={<IconPlus className={classes.icon} />}
        >
            {items}
        </Accordion>
    );
}

export default Demo;