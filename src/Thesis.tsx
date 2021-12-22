

function Thesis() {
    return (
        <div className="thesis">
            <div className="component-parent thesis">
                disclaimer: in this deck, i use the word "tokens" in reference to assets created on a blockchain——this includes NFTs
                <br />
                <br />

                1. Using the chain = token experiences
                <br />
                - nearly 100% of retail transactions are executed because someone wants to have a token experience

                <br />
                <br />
                2. Token experiences today
                <br />
                - mint new tokens
                <br />
                - buy/sell tokens
                <br />
                - move tokens around (usually to acquire more tokens)
                <br />
                <br />
                3. Tokens are fundamentally constrained by price
                <br />
                - a token is only as relevant as its price
                <br />
                - a token community gains/loses momentum alongside its price
                <br />
                <br />
                4. Today, all the tokens we experience are pre-fabricated
                <br />
                - they were created by someone else and then delivered to us
                <br />
                - we can mint them, we can move them around, and we can shill them—but they do not come from us
                <br />
                <br />
                5. If tokens don't accept our input, it's hard for them to express our identity
                <br />
                - people hold tokens that make them feel understood
                <br />
                <br />
                6. How does this square with what happened on web2?
                <br />
                - consumer web2 is defined by media experiences
                <br />
                <br />
                7. On web2, media is fundamentally constrained by attention. it's only as relevant as the people looking at it
                <br />
                <br />
                8. In this environment, several canonical media formats emerged
                <br />
                - photo dumps w/ tagging
                <br />
                - scrolling, global feed of short text snippets
                <br />
                - tap-through picture feeds that auto-delete after 24 hours
                <br />
                <br />
                9. Each of these are different ways of structuring media experiences in order to maintain user attention
                <br />
                <br />
                10. Consumers = creators
                <br />
                - one thing all the major web2 formats share is a fusion of consumers and creators
                <br />
                - it turns out, we really like media that includes our face, our words, our friends, and our ideas.
                <br />
                - this media makes us feel understood because it is "us"
                <br />
                - even when it doesn't literally come from us, it comes from people in our communities—not someone creating on behalf of the NYT from an office in manhattan
                <br />
                <br />
                11. Token experiences today
                <br />
                1. consume
                <br />
                - mint new tokens
                <br />
                - buy/sell tokens
                <br />
                - move tokens around (usually to acquire more tokens)
                <br />
                2. create
                <br />
                - launch your own NFT project
                <br />
                - build a protocol and launch a token
                <br />
                - ????
                <br />
                <br />
                12. right now, users only experience tokens passed down from above
                <br />
                - wen token
                <br />
                <br />
                13. community-generated tokens
                <br />
                - community-generated tokens crowdsource their inputs from community members
                <br />
                - to participate in the community is to invent its tokens
                <br />
                - when tokens are created by the community, they are best able to represent its members, and by extension, they are best able to capture & maintain price momentum
                <br />
                - as retail users become a primary consumer of tokens, it is inevitable that they will also become a primary creator
                <br />
                <br />
                14. community generated tokens structure their own demand in the same way that friends engage with pictures of each other
                <br />
                - we consume (ie, hold) the tokens that represent ourselves
                <br />
                15. an example
                <br />
                <br />
                16. Paris Radio Hour
                <br />
                - Paris Radio Hour is a music forum on solana
                <br />
                - each week, a new PRH is created on-chain—by the community—and auctioned off by the protocol
                <br />
                - for every PRH, community members can submit 1 post and 1 like
                <br />
                - at the end of the week, the PRH is minted as an NFT and sold via auction
                <br />
                - 100% of money goes to a community treasury, then a new forum begins
                <br />
                - all on-chain/permissionless on solana
                <br />
                - [parisradiohour.xyz](https://www.parisradiohour.xyz/)
                <br />
                <br />
                17. Because every PRH is the output of the community, it can adapt in real-time to changes in community sentiment
                <br />
                <br />
                18. Yelllow
                <br />
                - Yelllow writes protocols for community-generated tokens
                <br />
                - In the case of PRH, yelllow takes 0% on sales and 0% on royalties, but maintains a 15% membership share via inflation
                <br />
                - i.e., every time the forum issues new memberships, yelllow gets a prorated grant to maintain 15% of the total memberships issued
                <br />
                - separation of code/marketing
                <br />
                - Yelllow controls program upgrades and executes on engineering/security for its protocols
                <br />
                - PRH treasury is community-governed marketing dollars for the PRH
                <br />
                - we will find a canonical format for community-generated tokens and then multiply it across users/verticals
                <br />
                <br />

                19. social infrastructure
                <br />
                - when possible, any infrastructure that Yelllow builds to support community-generated tokens will be composable across solana
                <br />
                - for example, if we build a comments protocol to leave comments on token accounts, it will be generalizable to any token account on the chain
                <br />
                - this means NFT marketplaces could implement the protocol so that users can view/leave comments on NFTs up for auction
                <br />
                - all of this infrastructure will be maintained/governed by yelllow
                <br />
                - yelllow will progressively decentralize as the team sees fit
                <br />
                <br />

            </div>
        </div>

    )
}

export default Thesis;