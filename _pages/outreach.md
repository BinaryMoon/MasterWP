---
title: Email Outreach
permalink: /outreach/
scripts_external: "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js"
scripts_internal: "/assets/scripts/mwp-outreach.js"
---

<form>

	<label>
		Email type:<br />
		<select data-bind="value: selectEmail">
			<option value="cold-email">Cold-Email</option>
			<option value="existing-contacts">Existing Contacts</option>
			<option value="products">Products</option>
			<option value="non-wordpress">non WordPress</option>
			<option value="guest-posts">Guest Posts</option>
		</select>
	</label>

	<label>
		From:<br />
		<select data-bind="value: from">
			<option value="ben-gillbanks">Ben</option>
			<option value="alex-denning">Alex</option>
		</select>
	</label>

	<label>
		Article Author:
		<input type="text" data-bind="value: articleAuthor"/>
	</label>

	<label>
		Article Name/ Title:
		<input type="text" data-bind="value: articleName"/>
	</label>

	<label>
		Article Subject:
		<input type="text" data-bind="value: articleSubject"/>
	</label>

	<label>
		Article Url:
		<input type="text" data-bind="value: articleUrl"/>
	</label>

</form>

<!-- Template for cold-email people -->
<div class="email-content" markdown="1" data-bind="visible: selectEmail() == 'cold-email'">

Hi <span data-bind="text: articleAuthor"></span>,

Hope you’re well! Just to introduce myself, I’m <span data-bind="text: fromLongName"></span>  – I run a weekly quality newsletter for WordPress professionals called MasterWP.

Each week <span data-bind="text: partnerLongName"></span> and I feature five really good stories, products and thinkpieces relevant to WordPress professionals, and this week we featured one of your stories! We ran "<span data-bind="text: articleName"></span>" with a little bit of commentary from us and a link to the full story.

I’ve forwarded the email below. If you want to check out the newsletter (or share it), the link is: https://masterwp.co

Thanks, <span data-bind="text: fromShortName"></span>

</div>


<!-- Template for existing contacts -->
<div class="email-content " markdown="1" data-bind="visible: selectEmail() == 'existing-contacts'">

Hi <span data-bind="text: articleAuthor"></span>,

Hope you’re well! As you may have seen, a couple of months ago I started a quality weekly newsletter for WordPress professionals called MasterWP.

Each week <span data-bind="text: partnerLongName"></span> and I  feature five really good stories, products and thinkpieces relevant to WordPress professionals, and this week we featured one of your stories! We ran "<span data-bind="text: articleName"></span>" with a little bit of commentary from us and a link to the full story.

I’ve forwarded the email below. If you want to check out the newsletter (or share it), the link is: https://masterwp.co

Thanks, <span data-bind="text: fromShortName"></span>

</div>

<!-- Template for products -->
<div class="email-content" markdown="1" data-bind="visible: selectEmail() == 'products'">

Hi <span data-bind="text: articleAuthor"></span>,

Hope you’re well! Just to introduce myself, I’m <span data-bind="text: fromLongName"></span>  – I run a weekly quality newsletter for WordPress professionals called MasterWP.

Each week <span data-bind="text: partnerLongName"></span> and I feature five really good stories, products and thinkpieces relevant to WordPress professionals, and this week we featured the <span data-bind="text: articleName"></span> project! We added a little bit of commentary from us and a link.

I’ve forwarded the email below. If you want to check out the newsletter (or share it), the link is: https://masterwp.co

Thanks, <span data-bind="text: fromShortName"></span>

</div>



<!-- Template for non WordPress people -->
<div class="email-content" markdown="1" data-bind="visible: selectEmail() == 'non-wordpress'">

Hi <span data-bind="text: articleAuthor"></span>,

Hope you’re well! Just to introduce myself, I’m <span data-bind="text: fromLongName"></span> – I run a weekly quality newsletter for WordPress professionals called MasterWP.

Each week <span data-bind="text: partnerLongName"></span> and I feature five really good stories, products and thinkpieces relevant to WordPress professionals, and this week we featured one of your stories! We ran "<span data-bind="text: articleName"></span>" with a little bit of commentary from us and a link to the full story.

I appreciate you may not call yourself a "WordPress professional", but thought you'd like to see – I’ve forwarded the email below. If you want to check out the newsletter (or share it), the link is: https://masterwp.co

Thanks, <span data-bind="text: fromShortName"></span>

</div>


<!-- Template for guest posts -->
<div class="email-content" markdown="1" data-bind="visible: selectEmail() == 'guest-posts'">

Hi <span data-bind="text: articleAuthor"></span>,

Hope you’re well! Just to introduce myself, I’m <span data-bind="text: fromLongName"></span> – I run a weekly quality newsletter for WordPress professionals called MasterWP.

Each week <span data-bind="text: partnerLongName"></span> and I feature five really good stories, products and thinkpieces relevant to WordPress professionals, and this week we featured your recent post on <span data-bind="text: articleSubject"></span> ! We ran "<span data-bind="text: articleName"></span>" with a little bit of commentary from us and a link to the full story.

I’ve forwarded the email below. If you want to check out the newsletter (or share it), the link is: https://masterwp.co

Thanks! <span data-bind="text: fromShortName"></span>

</div>
