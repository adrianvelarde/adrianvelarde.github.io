var services = 
[
	{
		"Title": "Spiritual Development Coaching",
		"Description": "",
		"Benefit" : "Having Spiritual Development Coaching will give you the opportunity to call in for help with any issues or roadblocks you are experiencing with your development. You will receive guidance to help resolve these roadblocks or to guide you on to the path that will help you resolve them. During these types of sessions we will determine where your problem areas are and work together to find an appropriate solution.",
		"Price" : 70
	},
	{
		"Title": "Chakra Balancing",
		"Description": "Receive information about the Chakras and how to open them, and properly align them. Learn how to strengthen the Chakras and ensure that they are cleansed as well as ways you can defend yourself against the negative will of others.",
		"Benefit" : "Increasing the power of your Chakras gives you the benefit of growing closer to your higher self as well as opening yourself up to develop psychic abilities.",
		"Price" : 70
	},
	{
		"Title" : "Aura Manipulation",
		"Description": "Receive a series of meditations to learn how to feel the aura. Skills learned will include how to compact the aura, expand the aura, how to strengthen and empower it, and how to safely use it to attain your desires.",
		"Benefit" : "With the ability to expand your aura, you will be able to increase the effectiveness of any programming that you place into your aura. Expand it to affect those around you, and contract it to protect yourself from the influences of others.",
		"Price" : 70
	},
	{
		"Title": "Energy Sensitivity and Manipulation",
		"Description": "Receive a series of meditations to help develop the ability to be sensitive to the energy around you and the ability to manipulate it as well.",
		"Benefit" : "Learning the skills above are the building blocks to begin learning healing. Feeling where an energy is built up or lacking is important when performing a healing session on yourself or others as this will be an indicator of where you need to perform work. Once energy is detectable, energy manipulation will allow you to remove negative energy from the target areas as well as place positive energy to allow the target area to heal.",
		"Price" : 70
	}
]


var packages = 
[
	{
		"Title": "Four Sessions",
		"Description": "Save $80!",
		"Price": 200
	},
	{
		"Title": "3 Month Supported Development",
		"Description": "<ul><li>Three 1-on-1 Sessions</li><li>One Group Session</li><li>Access to Support Group</li><li>Unlimited Coaching Windows available 6p - 8p PST Monday - Friday</li></ul>",
		"Price": 200
	}
]


var introLanding = "&nbsp;&nbsp;Energy is all around us. Manipulating it is a gift that all human beings have, whether you are aware of it or not. It's just a matter of unlocking this inner ability and developing it, just like any other skill or ability. <br><br>&nbsp;&nbsp;Being able to use and manipulate energy will give you the tools you need to help better your life situation through attracting the things you want and removing negativity from your life. <br><br>&nbsp;&nbspOur soul is comprised of energy that we can use as well, which most of us have a low amount of energy that makes up our souls because we do not actively take the time to develop them. Our souls have energy powerhouses called Chakras. We have 7 main Chakras that each rule a different part of our lives. <br><br>&nbsp;&nbsp;Each of us has different experiences that shape who we are. This will result in only some Chakras to be active while others will be closed. "

services.displayText = function()
{
	$("#introLanding").html(function () 
	{
    	return $(this).html().replace("%text%", introLanding);
	});
};

services.displayText();
