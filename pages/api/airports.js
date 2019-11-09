export default async (req, res) => {
    const radius = 700;
    const { lat, lng } = req.query;
    const url = `https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=${radius}&lng=${lng}&lat=${lat}`;
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            // 'x-rapidapi-host': process.env.AIRPORTS_KEY,
            // 'x-rapidapi-key': process.env.AIRPORTS_SECRET,
            'x-rapidapi-host': 'cometari-airportsfinder-v1.p.rapidapi.com',
            'x-rapidapi-key': 'a094aac6e2msh9bd187ec1c61e94p1a5fcfjsnfa3703e7f3e3',
        },
    })
        .then(response => response)
        .catch(err => {
            console.log(err);
        });
    const data = await result.json();
    res.status(200).json({ data });
};
